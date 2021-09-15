import React, { useState, useCallback, useEffect } from 'react';
import { FiUser } from 'react-icons/fi';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import { RiEBike2Line } from 'react-icons/ri';
import { MdCancel } from 'react-icons/md';
import toast, { Toaster } from 'react-hot-toast';

import api from '../../../services/api';
import { NewModal } from '../../../components/Modal';

import { Container, Option, Config, Content, Product } from './styles';

import appName from '../../../assets/appName.png';
import SaleInfo from '../../../components/SaleInfo';
import Button from '../../../components/Button';
import Notify from '../../../components/Notify';

interface Client {
  id: string;
  name: string;
  cpf: string;
}

interface Product {
  name: string;
  product_url: string;
}

interface AddressClient {
  road: string;
  number: string;
  complement: string;
  cep: string;
}
interface SaleInfo {
  id: string;
  id_product_sold: Product;
  id_user_buying: Client;
  address_id_user: AddressClient;
  value: string;
  status: string;
  methodpay: string;
  troco?: string;
}

const FoodOrders: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectFirstOption, setSelectFirstOption] = useState(false);
  const [listSale, setListSale] = useState<SaleInfo[]>([]);
  const [selectedSale, setSelectedSale] = useState<SaleInfo>({} as SaleInfo);

  function handleSetModal() {
    setOpenModal(!openModal);
  }

  function updateListSaleWait() {
    api.get('sales/list').then((response) => {
      setListSale(
        response.data.filter(
          (sale: SaleInfo) => sale.status === 'Aguardando pagamento',
        ),
      );
    });
  }

  function updateListSaleConfirm() {
    api.get('sales/list').then((response) => {
      setListSale(
        response.data.filter(
          (sale: SaleInfo) =>
            sale.status === 'Pedido aceito' ||
            sale.status === 'Saiu para entrega',
        ),
      );
    });
  }

  const handleSelectOption = useCallback(() => {
    setSelectFirstOption(!selectFirstOption);
    if (selectFirstOption) {
      updateListSaleWait();
    } else {
      updateListSaleConfirm();
    }
  }, [setSelectFirstOption, selectFirstOption]);

  const handleSelectSale = useCallback((sale: SaleInfo) => {
    setSelectedSale(sale);
  }, []);

  const handleRejectSale = useCallback(async (sale: SaleInfo) => {
    await api.put('/sales', {
      id_sale: sale.id,
      status: 'Pedido rejeitado',
    });
    toast.success('Produto rejeitado com sucesso');
    setSelectedSale({} as SaleInfo);
    updateListSaleWait();
  }, []);

  const handleAcceptSale = useCallback(async (sale: SaleInfo) => {
    await api.put('/sales', {
      id_sale: sale.id,
      status: 'Pedido aceito',
    });
    toast.success('Produto aceito com sucesso');
    setSelectedSale({} as SaleInfo);
    updateListSaleWait();
  }, []);

  useEffect(() => {
    api.get('sales/list').then((response) => {
      setListSale(
        response.data.filter(
          (sale: SaleInfo) => sale.status === 'Aguardando pagamento',
        ),
      );
    });
  }, []);

  const handleSubmitProduct = useCallback(async (sale: SaleInfo) => {
    api
      .put('/sales', {
        id_sale: sale.id,
        status: 'Saiu para entrega',
      })
      .then((response) => {
        setSelectedSale(response.data);
      });
    toast.success('Pedido saiu para entrega');
  }, []);

  const handleFinalizeOrder = useCallback(async (sale: SaleInfo) => {
    await api.put('/sales', {
      id_sale: sale.id,
      status: 'Pedido entrege',
    });
    setSelectedSale({} as SaleInfo);
    updateListSaleConfirm();
    toast.success('Pedido entrege e venda finalizada');
  }, []);

  return (
    <Container>
      <div className="option">
        <img src={appName} alt="MayCake" />

        <div className="options">
          <Option
            type="button"
            onClick={handleSelectOption}
            disabled={!selectFirstOption}
            isSelected={selectFirstOption}
          >
            Pedidos
          </Option>
          <Option
            type="button"
            onClick={handleSelectOption}
            disabled={selectFirstOption}
            isSelected={!selectFirstOption}
          >
            Aceitos
          </Option>
        </div>
        <div className="infoOrders">
          {listSale.map((sale) => (
            <div key={sale.id}>
              <SaleInfo
                img={sale.id_product_sold.product_url}
                nameProduct={sale.id_product_sold.name}
                nameClient={sale.id_user_buying.name}
              />
              <button type="button" onClick={() => handleSelectSale(sale)}>
                <span>Clique para mais detalhes</span>
              </button>
            </div>
          ))}
        </div>
      </div>
      <Content>
        <Config>
          <Notify />
          <FiUser size={22} color="#c2185b" onClick={handleSetModal} />
        </Config>
        <NewModal isOpen={openModal} onRequestClose={handleSetModal} />
        <Toaster position="top-center" reverseOrder={false} />
        {selectedSale.id_product_sold && (
          <Product key={selectedSale.id}>
            <img
              src={selectedSale.id_product_sold.product_url}
              alt={selectedSale.id_product_sold.name}
            />
            <div>
              <div className="info">
                <h1>{selectedSale.id_product_sold.name}</h1>
                <p>Pedido feito por: {selectedSale.id_user_buying.name}</p>
                <p>CPF: {selectedSale.id_user_buying.cpf}</p>
                <p>Tipo de pagamento: {selectedSale.methodpay}</p>
                {selectedSale.troco && (
                  <p>Troco? Sim, R$ {selectedSale.troco}</p>
                )}
              </div>
              <div className="address">
                <h2>Endereço:</h2>
                <p>{selectedSale.address_id_user.road}</p>
                <p>Nº {selectedSale.address_id_user.number}</p>
                <p>Complemento: {selectedSale.address_id_user.complement}</p>
                <p>CEP: {selectedSale.address_id_user.cep}</p>
              </div>
              {selectedSale.status === 'Aguardando pagamento' && (
                <div className="confirmation">
                  <button
                    type="button"
                    onClick={() => handleRejectSale(selectedSale)}
                  >
                    <MdCancel color="#FC4F4F" size={34} />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAcceptSale(selectedSale)}
                  >
                    <IoMdCheckmarkCircle color="#3CCB75" size={34} />
                  </button>
                </div>
              )}

              {selectedSale.status === 'Pedido aceito' && (
                <Button
                  icon={RiEBike2Line}
                  small
                  onClick={() => handleSubmitProduct(selectedSale)}
                >
                  Sair para entrega
                </Button>
              )}

              {selectedSale.status === 'Saiu para entrega' && (
                <Button
                  icon={RiEBike2Line}
                  small
                  onClick={() => handleFinalizeOrder(selectedSale)}
                >
                  Finalizar pedido
                </Button>
              )}
            </div>
          </Product>
        )}
      </Content>
    </Container>
  );
};

export default FoodOrders;
