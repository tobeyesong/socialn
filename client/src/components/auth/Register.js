import React, { Fragment, useState } from 'react';
import { UserAddIcon } from '@heroicons/react/solid';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alertAction';
import { register } from '../../actions/authAction';
import { Form, Field } from 'react-final-form';
import { Link, Redirect } from 'react-router-dom';
import { FORM_ERROR } from 'final-form';
import PropTypes from 'prop-types';
import { XCircleIcon } from '@heroicons/react/solid';

const required = (value) => (value ? undefined : 'Required');

const Register = ({ register, isAuthenticated }) => {
  const onSubmit = async (values) => {
    if (values.password !== values.password2) {
      return { [FORM_ERROR]: 'Password does not match' };
    } else {
      register(values);
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <img
            className="w-auto h-12 mx-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-3xl text-center text-gray-900 font-regular">
            Register Your Account
          </h2>
        </div>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, submitError }) => (
            <form className="mt-8 mb-4 space-y-6" onSubmit={handleSubmit}>
              <div className="p-4 border-2 border-gray-100 rounded-md shadow-lg">
                <Field
                  name="name"
                  component="input"
                  placeholder="Name"
                  validate={required}
                >
                  {({ input, meta, placeholder }) => (
                    <div>
                      <input
                        {...input}
                        placeholder={placeholder}
                        className="block w-full px-4 py-2 pl-1 mb-2 border-2 border-gray-300 rounded-md shadow text-l focus:outline-none border-gray focus:border-blue-500"
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
                  name="email"
                  component="input"
                  placeholder="Email Address"
                  validate={required}
                >
                  {({ input, meta, placeholder }) => (
                    <div>
                      <input
                        {...input}
                        placeholder={placeholder}
                        className="block w-full px-4 py-2 pl-1 mb-2 border-2 border-gray-300 rounded-md shadow text-l focus:outline-none border-gray focus:border-blue-500"
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
                  type="password"
                  component="input"
                  placeholder="Password"
                  validate={required}
                >
                  {({ input, meta, placeholder }) => (
                    <div>
                      <input
                        {...input}
                        placeholder={placeholder}
                        className="block w-full px-4 py-2 pl-1 mb-2 border-2 border-gray-300 rounded-md shadow text-l focus:outline-none border-gray focus:border-blue-500"
                      />
                      {(meta.error || meta.submitError) && meta.touched && (
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
                                {meta.error || meta.submitError}
                              </h3>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </Field>

                <Field
                  name="password2"
                  type="password"
                  component="input"
                  placeholder="Confirm Password"
                  validate={required}
                >
                  {({ input, meta, placeholder }) => (
                    <div>
                      <input
                        {...input}
                        placeholder={placeholder}
                        className="block w-full px-4 py-2 pl-1 mb-2 border-2 border-gray-300 rounded-md shadow text-l focus:outline-none border-gray focus:border-blue-500"
                      />
                      {(meta.error || meta.submitError) && meta.touched && (
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
                                {meta.error || meta.submitError}
                              </h3>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </Field>
                {submitError && (
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
                          {submitError}
                        </h3>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  className="relative flex justify-center w-full px-4 py-2 text-lg text-white bg-indigo-600 border border-transparent rounded-md shadow-lg font-regular group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <UserAddIcon
                      className="w-5 h-5 text-indigo-500 group-hover:text-indigo-400"
                      aria-hidden="true"
                    />
                  </span>
                  Register
                </button>
              </div>
            </form>
          )}
        />
      </div>
    </div>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state
});

export default connect(mapStateToProps, { setAlert, register })(Register);
