import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight, FiPower } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import api from '../../services/api';

import { Container } from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Sidebar from '../../components/Sidebar';
import Main from '../../components/Main';

import { AuthContext } from '../../hook/AuthContext';
import getValidationErrors from '../../utils/getValidationErrors';

import profileImage from '../../assets/profile.png';

interface FindTicketData {
  ticket_id: string;
}

interface FindFormData {
  subject: string;
}

const Admindashboard: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { user, logOut } = useContext(AuthContext);
  const [tickets, setTickets] = useState<FindFormData[]>([]);

  const handleLogOut = useCallback(() => {
    logOut();
  }, [logOut]);

  const handleSubmit = useCallback(async ({ ticket_id }: FindTicketData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        ticket_id: Yup.string()
          .min(36, 'Insira um id válido')
          .max(36, 'Insira um id válido')
          .required('Insira um id válido'),
      });

      await schema.validate(
        { ticket_id },
        {
          abortEarly: false,
        },
      );

      await api.get<FindFormData>(`tickets/${ticket_id}`);

      // setDisplay(false);

      // setTicketId({ ticket_id });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const error = getValidationErrors(err);

        formRef.current?.setErrors(error);
      }
    }
  }, []);

  useEffect(() => {
    api.get('/tickets').then(response => {
      setTickets(response.data);
    });
  }, []);

  return (
    <Container>
      <Sidebar />
      <Main />
    </Container>
  );
};

export default Admindashboard;
