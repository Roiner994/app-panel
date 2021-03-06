import React from 'react';
import {Form , Button, ButtonToolbar} from "reactstrap";
import { reduxForm, Field } from "redux-form";
import { setPropsAsInitial } from '../../helpers/setPropsAsInitial';
import {Prompt} from "react-router-dom";
import MyField from "../Fields/MyField";
import {isRequired} from "../../constants/validation";
import PropTypes from 'prop-types';

const LoginForm = ({handleSubmit, submitting, onBack, pristine, submitSucceeded}) => {
    return (
        <Form onSubmit={handleSubmit}>
            <Field 
                name="email" 
                component={MyField} 
                type="email" 
                validate={isRequired} 
                label="Correo"
                placeholder= "Correo"
            />
            <Field 
                name="password" 
                component={MyField} 
                type="password" 
                validate={isRequired} 
                label="Contraseña"
                placeholder= "Contraseña"
            />

            <ButtonToolbar className="float-right">
                <Button color="primary" type="submit" disabled={pristine || submitting}>
                    Aceptar
                </Button>
                &nbsp;
            </ButtonToolbar>
            <Prompt
                        when={!pristine && !submitSucceeded}
                        message="Se perderan los datos si continua"></Prompt>
        </Form>
    );
};

LoginForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired,
    submitting: PropTypes.bool,
};

const LoginFormRedux = reduxForm({ form: "LoginForm" })(LoginForm);
export default setPropsAsInitial (LoginFormRedux);