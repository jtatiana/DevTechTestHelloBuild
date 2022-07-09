import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { Formik, Form } from 'formik'
import { object, string, email, required, min, matches, ref, oneOf } from 'yup';
// Components
import Input from '../../components/Input'
import Button from '../../components/Button'
// Services
import SignUpService from '../../services/SignUp/SignUpService'
import AuthService from '../../services/Auth/AuthService'
// Styles
import './style.css'

const signUpValidation = object({
  email: string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required')
    .matches(/[a-zA-Z][0-9]/, 'Password can only contain Latin letters.'),
  passwordConfirmation: string('Enter your password')
    .required('Password confirmation is required')
    .oneOf([ref('password'), null], 'Passwords must match')
})

export default function SignUp() {

  const handleSubmit = async ({ email, password }) => {
    const res = await SignUpService.signUp({ email, password })
    if (Number(res.status) >= 400) {
      return
    }
    AuthService.getOwnToken(res.token)
    window.location.href = res.authPage
  }

  if (AuthService.isAuthenticated()) {
    return <Navigate to='/home' />
  }

  return (
    <div className="auth-inner">
      <section>
        <Formik
          initialValues={{
            email: '',
            password: '',
            passwordConfirmation: ''
          }}
          validationSchema={signUpValidation}
          onSubmit={handleSubmit}
        >
          {
            ({ isValid, dirty }) => (
              <Form>
                <h3>Sign Up</h3>
                <Input name='email' label='Email' />
                <Input type='password' name='password' label='Password' />
                <Input type='password' name='passwordConfirmation' label='Password Confirmation' />
                <Button type='submit' disabled={!isValid || !dirty}>Submit</Button>
                <p className="link-account text-right">
                  Already have an account? <Link to='/signIn'>Sign In</Link>
                </p>
              </Form>
            )
          }
        </Formik>
      </section >
    </div>
  )
}