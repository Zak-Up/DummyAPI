import React from 'react';
import { useForm } from '../hooks/useForm';
import Loader from '../components/Loader';
import Message from '../components/Message';

const initialForm = {
  name: '',
  email: '',
  subject: '',
  comments: ''
};

const validationForm = (form) => {

  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  if(!form.name.trim()){
    errors.name = 'El campo "Nombre" esta vacio.'
  } else if (!regexName.test(form.name.trim())){
    errors.name = 'Solo acepta letras y espacios en blanco'
  }

  if(!form.email.trim()){
    errors.email = 'El campo "Email" esta vacio'
  } else if (!regexEmail.test(form.email.trim())){
    errors.email = "Email inválido"
  }

  if(!form.subject.trim()){
    errors.subject = 'El campo "Asunto" esta vacio'
  } else if (!regexComments.test(form.subject.trim())){
    errors.subject = 'Solo puedes escribir 1255 caracteres'
  }
  return errors;
};

let styleError = {
    fontWeight: "bold",
    color: "#dc3545"
}

const ContactForm = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit
  } = useForm(initialForm, validationForm);

  return(
    <div>
      <h2>Formulario de Contacto</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type='text'
          name='name' 
          placeholder='Escribe tu nombre...' 
          onChange={handleChange}
          onBlur={handleBlur} 
          value={form.name}
          required
          />
          {errors.name && <p style={styleError}>{errors.name}</p>}
        <input 
          type='email'
          name='email' 
          placeholder='Escribe tu Email...' 
          onChange={handleChange}
          onBlur={handleBlur} 
          value={form.email}
          required
          />
          {errors.email && <p style={styleError}>{errors.email}</p>}
        <input 
          type='text'
          name='subject' 
          placeholder='Asunto' 
          onChange={handleChange}
          onBlur={handleBlur} 
          value={form.subject}
          required
          />
          {errors.subject && <p style={styleError}>{errors.subject}</p>}
          <textarea 
           cols='50' 
           rows='5' 
           name='comments'
           placeholder='Comentarios..'
           onChange={handleChange}
           onBlur={handleBlur}
           value={form.comments}
           ></textarea>
           <input type='submit' value='Enviar'></input>
      </form>
      {loading && <Loader/>}
      {response && <Message/>}
    </div>
  );
};
export default ContactForm