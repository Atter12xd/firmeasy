import { useState } from 'react'
import styles from './DemoForm.module.scss'
import site from '@site'

export default function DemoForm() { 
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
  })

  const validate = (send: () => void) => {
    if (
      form.name.length > 0 &&
      form.email.length > 0 &&
      form.phone.length > 0 &&
      form.company.length > 0
    ) {
      send()
    }
  }

  const clearForm = () => {
    setForm({
      name: '',
      email: '',
      phone: '',
      company: '',
    })
  }

  const send = () => {
    const whatsappLink = `https://api.whatsapp.com/send?phone=51${site.product.sales_phone}&text=Hola%2C%20mi%20nombre%20es%20*${form.name}*%3A%0A-%20Correo%3A%20${form.email}%0A-%20Celular%3A%20${form.phone}%0A-%20Empresa%3A%20${form.company}%0A%20Quiero%20Solicitar%20una%20demo%20de%20Firmeasy.`
    window.open(whatsappLink, '_blank')
    clearForm()
  }

  return (
    <section className={styles.form}>
      <div className={styles.title}>
        <h2>{site.product.header.form.title}</h2>
        <p>{site.product.header.form.caption}</p>
      </div>
      <form onSubmit={(e) => { e.preventDefault(); validate(send) }} className={styles.wrapper}>
        <input required type="text" placeholder="Nombre" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input required pattern="[^@\s]+@[^@\s]+\.[^@\s]+" title="Correo Electrónico no es válido" type="text" placeholder="Correo Electrónico" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input required type="tel" pattern="[0-9]{3}[0-9]{3}[0-9]{3}" maxLength={9} placeholder="Teléfono" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        <input required type="text" placeholder="Empresa" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
        <button type="submit" className="button gradient transition-up"> {site.product.header.form.buttonSendText} </button>
        <strong>o</strong>
        <a href="https://app.firmeasy.legal/registro" className="button transition-up">{site.product.header.form.buttonRegisterText}</a>
      </form>
    </section>
  )
}