

const FormUser = (props) => {

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    props.setFormData({
      ...props.formData,
      [name]: value,
    });
  };

  return (
      <div style={{padding : 30}}>
        <input name="name" value={props.formData.name} onChange={onChange} placeholder="Input your name" />
        <input name="email" value={props.formData.email} onChange={onChange} placeholder="Input your email"/>
        <input name="phone" value={props.formData.phone} onChange={onChange} placeholder="Input your phone"/>
        <button onClick={props.onClick}>{props.formData.id ? 'edit' : 'create'}</button>
      </div>
     
  );
};
export default FormUser;
