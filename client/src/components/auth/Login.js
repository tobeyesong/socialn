import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import { login } from '../../actions/authAction';
// import { FORM_ERROR } from 'final-form';
import { XCircleIcon } from '@heroicons/react/solid';

const required = (value) => (value ? undefined : 'Required');

const Login = ({ login, isAuthenticated }) => {
  const onSubmit = async (values) => {
    login(values);
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <Fragment>
      <div>
        <img
          className="w-auto h-12"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        />
        <h2 className="mt-6 text-3xl font-bold text-gray-900">Sign In</h2>
      </div>

      <div className="mt-8">
        <div>
          <div>{/* <GoogleAuth /> */}</div>

          <div className="relative mt-6">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 text-gray-500 bg-white rounded-md shadow-lg">
                Or Continue With
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, submitError }) => (
              <form className="mt-8 mb-4 space-y-6" onSubmit={handleSubmit}>
                <Field
                  name="email"
                  type="email"
                  component="input"
                  validate={required}
                >
                  {({ input, meta }) => (
                    <div>
                      {' '}
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <input
                        {...input}
                        className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm shadow-inner appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      {meta.error && meta.touched && (
                        <div className="p-1 mt-1 mb-2 transition duration-500 ease-in-out rounded-md bg-red-50">
                          <div className="flex">
                            <div className="flex-shrink-0">
                              <XCircleIcon
                                className="w-5 h-5 text-red-400"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="ml-3">
                              <h3 className="text-sm font-medium text-red-800">
                                {meta.error}
                              </h3>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </Field>

                <Field
                  name="password"
                  component="input"
                  type="password"
                  validate={required}
                >
                  {({ input, meta }) => (
                    <div>
                      {' '}
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Password
                      </label>
                      <input
                        {...input}
                        className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm shadow-inner appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      {meta.error && meta.touched && (
                        <div className="p-1 mt-1 mb-2 transition duration-500 ease-in-out rounded-md bg-red-50">
                          <div className="flex">
                            <div className="flex-shrink-0">
                              <XCircleIcon
                                className="w-5 h-5 text-red-400"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="ml-3">
                              <h3 className="text-sm font-medium text-red-800">
                                {meta.error}
                              </h3>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </Field>

                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <Link
                      to="/register"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Register
                    </Link>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex justify-center w-full px-4 py-2 text-white bg-indigo-600 border border-transparent rounded-md shadow-sm font-regular text-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            )}
          />
        </div>
      </div>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state
});

export default connect(mapStateToProps, { login })(Login);
