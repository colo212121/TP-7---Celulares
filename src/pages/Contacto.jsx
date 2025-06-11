function Contacto() {
  const styles = {
    container: {
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '500px',
      margin: '0 auto',
    },
    title: {
      fontSize: '32px',
      marginBottom: '20px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },
    input: {
      padding: '10px',
      fontSize: '16px',
      border: '1px solid #ccc',
      borderRadius: '4px',
    },
    textarea: {
      padding: '10px',
      fontSize: '16px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      resize: 'vertical',
      minHeight: '100px',
    },
    button: {
      padding: '12px',
      fontSize: '16px',
      backgroundColor: '#333',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contacto</h1>
      <form style={styles.form}>
        <input type="text" placeholder="Nombre" required style={styles.input} />
        <input type="email" placeholder="Email" required style={styles.input} />
        <textarea placeholder="Mensaje" required style={styles.textarea} />
        <button type="submit" style={styles.button}>Enviar</button>
      </form>
    </div>
  );
}

export default Contacto;
