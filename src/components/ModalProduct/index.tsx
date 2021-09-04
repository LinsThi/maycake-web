import { useCallback, useRef } from 'react';
import Modal from 'react-modal';
import { FiCamera } from 'react-icons/fi';
import { IoMdCloseCircle } from 'react-icons/io';
import toast, { Toaster } from 'react-hot-toast';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import InputProduct from '../InputProduct';
import TextArea from '../TextArea';
import { useProduct } from '../../hooks/product';

import { Container } from './styles';
import getValidationErrors from '../../utils/getValidationsError';
import api from '../../services/api';

interface FormData {
  name: string;
  description: string;
  value: string;
}

interface ModalProductProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function ModalProduct({ isOpen, onRequestClose }: ModalProductProps) {
  const formRef = useRef<FormHandles>(null);
  const { productInfo } = useProduct();

  const handleSubmit = useCallback(
    async (data: FormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome do produto obrigatório'),
          description: Yup.string().required(
            'Descrição do produto obrigatório',
          ),
          value: Yup.string().required('Valor do produto obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.put('/products', {
          product_id: productInfo.id,
          name: data.name,
          description: data.description,
          value: data.value,
        });

        toast.success('Produto atualizado com sucesso');
      } catch (err) {
        console.clear();
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        } else {
          toast.error('ERROR: Falha ao atualizar o produto.');
        }
      }
    },
    [productInfo.id],
  );

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <IoMdCloseCircle size={20} color="#FC4F4F" />
      </button>
      <Container>
        <Form
          ref={formRef}
          onSubmit={handleSubmit}
          initialData={{
            name: productInfo.name,
            description: productInfo.description,
            value: productInfo.value,
          }}
        >
          <div className="infoProduct">
            <img src={productInfo.product_url} alt={productInfo.name} />
            <label htmlFor="imgProduct">
              <input type="file" id="imgProduct" />
              <FiCamera />
            </label>
          </div>
          <div className="detailsProduct">
            <Toaster position="top-center" reverseOrder={false} />

            <InputProduct name="name" />

            <TextArea name="description" fromModal />

            <InputProduct name="value" type="text" fromModal />

            <button type="submit" className="submitProduct">
              Atualizar produto
            </button>
          </div>
        </Form>
      </Container>
    </Modal>
  );
}
