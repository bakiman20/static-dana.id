import React from 'react'
import { withFormik } from 'formik'
import { string, object } from 'yup'

export const ContactForm = props => {
  const { values, errors, handleChange, handleBlur, handleSubmit } = props
  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name" className="label">
          Name
        </label>
        <div className="control">
          <input
            className="input"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            name="name"
            type="text"
          />
        </div>
        <p className="help is-danger">{errors['name']}</p>
      </div>
      <div className="field">
        <label htmlFor="email" className="label">
          E-mail
        </label>
        <div className="control">
          <input
            className="input"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            name="email"
            type="email"
          />
        </div>
        <p className="help is-danger">{errors['email']}</p>
      </div>
      <div className="field">
        <label htmlFor="message" className="label">
          Message
        </label>
        <div className="control">
          <textarea
            name="message"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.message}
            className="textarea"
          />
        </div>
        <p className="help is-danger" />
      </div>
      <div className="control">
        <button className="button is-link is-fullwidth" type="submit">
          Send
        </button>
      </div>
    </form>
  )
}

export default withFormik({
  validationSchema: object().shape({
    name: string().required('Please enter your name'),
    email: string()
      .matches(
        /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
        'Please enter a valid email'
      )
      .required('Please enter your email'),
  }),
  mapPropsToValues: () => ({ name: '', email: '', message: '' }),
  validateOnChange: true,
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert('Message Sent. Thank You!')
      console.log('Submitted data', JSON.stringify(values, null, 2))
      setSubmitting(false)
    }, 1000)
  },
})(ContactForm)
