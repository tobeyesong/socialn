import React, { Fragment } from 'react';
import { UserAddIcon } from '@heroicons/react/solid';
import { Field, reduxForm } from 'redux-form';
import { XCircleIcon } from '@heroicons/react/solid';

class Register extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="p-1 mt-3 transition duration-500 ease-in-out rounded-md bg-red-50">
          <div className="flex">
            <div className="flex-shrink-0">
              <XCircleIcon
                className="w-5 h-5 text-red-400"
                aria-hidden="true"
              />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">{error}</h3>
            </div>
          </div>
        </div>
      );
    }
  }
  renderInput = ({ input, placeholder, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'bg-red-200' : ''}`;
    return (
      <div>
        <div className="mt-1 mb-4 ">
          <input
            {...input}
            type="text"
            name="email"
            id="email"
            placeholder={placeholder}
            className="block w-full px-4 py-2 pl-1 border-2 border-gray-300 rounded-md shadow-lg text-l focus:outline-none border-gray focus:border-blue-500"
          />
          {this.renderError(meta)}
        </div>
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };
  render() {
    return (
      <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="w-auto h-12 mx-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-3xl font-bold text-center text-gray-900">
              Register Your Account
            </h2>
          </div>
          <form
            className="mt-8 mb-4 space-y-6"
            onSubmit={this.props.handleSubmit(this.onSubmit)}
          >
            <Field
              name="name"
              component={this.renderInput}
              placeholder="Name"
            />
            <Field
              name="email"
              component={this.renderInput}
              placeholder="Email Address"
            />
            <Field
              name="password"
              component={this.renderInput}
              placeholder="Password"
            />
            <Field
              name="password2"
              component={this.renderInput}
              placeholder="Confirm Password"
            />

            <div>
              <button
                type="submit"
                className="relative flex justify-center w-full px-4 py-2 text-lg text-white bg-indigo-600 border border-transparent rounded-md font-regular group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
        </div>
      </div>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.name) {
    errors.name = 'You must enter a name';
  }

  if (!formValues.email) {
    errors.email = 'You must enter an email address';
  }

  if (!formValues.password) {
    errors.password = 'You must enter a password';
  }

  if (!formValues.password2) {
    errors.password2 = 'You must confirm password';
  }

  return errors;
};

export default reduxForm({
  form: 'Register',
  validate
})(Register);
