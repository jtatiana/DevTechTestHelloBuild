import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { Formik, Form } from 'formik'
import { object, string, email, required, min, matches, ref, oneOf } from 'yup';
// Components
import Input from '../../components/Input'
import Button from '../../components/Button'
// Services
import SignInService from '../../services/SignIn/SignInService'
import AuthService from '../../services/Auth/AuthService'
// Styles
import './style.css'

const validationLogin = object({
  email: string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required')
    .matches(/[a-zA-Z][0-9]/, 'Password can only contain Latin letters.')
});

export default function SignIn() {
  const handleSubmit = async ({ email, password }) => {
    const res = await SignInService.signIn({ email, password })
    if (Number(res.status) >= 400) {
      return
    }
    AuthService.setOwnToken(res.token)
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
            password: ''
          }}
          validationSchema={validationLogin}
          onSubmit={handleSubmit}
        >
          {
            ({ isValid, dirty }) => (
              <Form>
                <h3>Welcome!</h3>
                <Input name='email' label='Email' />
                <Input type='password' name='password' label='Password' />
                <Button type='submit' disabled={!isValid || !dirty}>Submit</Button>
                <p className="link-account text-right">
                  Don't have an account? <Link to='/signUp'>Sign Up</Link>
                </p>
              </Form>
            )
          }
        </Formik>
      </section>
    </div>
  )
}