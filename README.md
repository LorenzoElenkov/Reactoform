# Reactoform v0.2
API |Examples|
|--|--|


### Introduction

**Reactoform** library deals with form creation and validation, while changing inputs, contrary to other approaches, when hitting 'Submit' button. Therefore, 'Submit' button stays disabled until all inputs were validated correctly.

**Reactoform** also does not expose inputs as other libraries do. Instead, it requires an array of objects, where each object is representing one single input with its options configured.

**Reactoform** library was made by Lorenzo Elenkov as that is his own solution to form creation.


### Installation

    npm install @lorenzoelenkov/reactoform



### Quickstart

    
    import { Form } from '@lorenzoelenkov/reactoform
    
    const formInputs = [
	    { 
		    label: 'Email',
		    type: 'text',
		    validation: {
			    email: true
		    }
	    },
	    {
		    label: 'Password',
		    type: 'password',
		    validation: {
			    pattern: { value: /[A-Z]+[a-z]+[0-9]+[!@#]+/, error: 'Password must contain one lowercase, one uppercase, one number and one special character' },
			    minLength: { value: 8, error: 'Password must be at least 8 characters' }
		    }
	    }
    ]
    
    const App = () => {
	    return (
		    <div className="App">
			    <Form data={formInputs} onSubmit={value => console.log(value)}
		    </div>
	    )
    }
    

There are other types and options for inputs. You can checkout the API or Examples.

### Styling
Currently, you can include `customClass` field in `formInputs` object for each input. With a `customClass` set, you can style your labels, inputs and error spans through:

 - Vanilla CSS
 - CSS Modules
 - SASS/LESS

*Other styling options will be integrated in the future, for reference look at the roadmap*

### Roadmap

**Q1 2023**

 - Invalid inputs have a red border
 - Checkbox input
 - Multi-select input
 - Switch input
 - Animations

**Q2 2023**

 - Material UI integration
 - AntD UI integration

 
