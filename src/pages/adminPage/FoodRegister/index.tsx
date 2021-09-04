import React, { useState, useCallback, useRef, ChangeEvent } from 'react';
import { FiUser } from 'react-icons/fi';
import { BsCloudUpload } from 'react-icons/bs';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';

import TextArea from '../../../components/TextArea';
import InputProduct from '../../../components/InputProduct';
import { NewModal } from '../../../components/Modal';

import getValidationErrors from '../../../utils/getValidationsError';
import api from '../../../services/api';

import {
  Container,
  Header,
  HeaderContent,
  Config,
  Content,
  Product,
} from './styles';

import appName from '../../../assets/appName.png';

interface FormData {
  nameProduct: string;
  description: string;
  value: string;
}

const FoodRegister: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [openModal, setOpenModal] = useState(false);

  function handleSetModal() {
    setOpenModal(!openModal);
  }

  const handleSubmit = useCallback(async (data: FormData) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        nameProduct: Yup.string().required('Nome do produto obrigatório'),
        description: Yup.string().required('Descrição do produto obrigatória'),
        value: Yup.string().required('Valor do produto obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await api.post('/products', {
        name: data.nameProduct,
        description: data.description,
        value: data.value,
      });

      toast.success('Produto cadastrado com sucesso');
    } catch (err) {
      // console.clear();
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      } else {
        toast.error('Por favor, verifique os dados do produto');
      }
    }
  }, []);

  const handleUploadPhoto = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const data = new FormData();

        data.append('photo', e.target.files[0]);

        await api.patch('/products/photo', data);

        toast.success('Foto do produto cadastrado com sucesso');
      }
    },
    [],
  );

  return (
    <>
      <Container>
        <Header>
          <HeaderContent>
            <img src={appName} alt="MayCake" />
          </HeaderContent>
          <Config>
            <FiUser size={20} color="#c2185b" onClick={handleSetModal} />
          </Config>
        </Header>
      </Container>
      <NewModal isOpen={openModal} onRequestClose={handleSetModal} />
      <Content>
        <h2>Novo produto</h2>
        <Product>
          <Form onSubmit={handleSubmit} ref={formRef}>
            <Toaster position="top-center" reverseOrder={false} />
            <div className="productInfo">
              <h2>Nome do Produto</h2>
              <InputProduct
                name="nameProduct"
                type="text"
                placeholder="Nome do produto"
              />
              <h2 className="descProduct">Descrição do produto</h2>
              <TextArea name="description" placeholder="Descrição do produto" />
              <h2 className="valueProduct">Preço</h2>
              <div className="coin">
                <h3>R$</h3>
                <InputProduct name="value" type="text" />
              </div>
            </div>

            <div className="productImg">
              <h2>Adicionar imagens</h2>
              <label htmlFor="photo">
                <BsCloudUpload size={90} />
                <p>Clique aqui para upload</p>
                <input type="file" id="photo" onChange={handleUploadPhoto} />
              </label>
              <button type="submit" className="submitProduct">
                Cadastrar
              </button>
            </div>
          </Form>
        </Product>
      </Content>
    </>
  );
};

export default FoodRegister;
