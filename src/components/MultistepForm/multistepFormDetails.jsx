import PersonalInfo from './components/PersonalInfo'
import PickAddons from './components/PickAddons'
import SelectPlan from './components/SelectPlan'
import Summary from './components/Summary'

const personalInfo = {
  id: 'personalInfo',
  name: 'your info', 
  title: 'Personal Info',
  description: 'Please provide your name, email address, and phone number.',
  validators : {
    name: function(value) {
      if(!value) {
        return 'Name cannot be blank'
      }
    },
    email: function(value) {
      if(!value) {
        return 'email cannot be blank'
      }

      const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };
      if(!validateEmail(value)) {
        return 'Email is invalid'
      }
    },
    phone: function(value) {
      const pattern = new RegExp("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$");
      if(!value) {
        return 'Phone cannot be blank'
      }
      if(!pattern.test(value)){
        return 'Phone is invalid'
      }
    }
  }
}

const selectPlan = {
  id: 'selectPlan',
  name: 'select plan',
  title: 'Select your plan',
  description: 'You have the option of monthly or yearly billing.',
  initialState: {
    plan: 'arcade',
    duration: 'monthly'
  },
  plans: {
    arcade: {
      id: 'arcade',
      name: 'Arcade',
      icon: "/public/images/icon-arcade.svg",
      price: {
        monthly: 9,
        yearly: 90
      },
      discount: {
        yearly: '2 months free'
      }
    },
    advanced: {
      id: 'advanced',
      name: 'Advanced',
      icon: "/public/images/icon-advanced.svg",
      price: {
        monthly: 12,
        yearly: 120
      },
      discount: {
        yearly: '2 months free'
      }
    },
    pro: {
      id: 'pro',
      name: 'Pro',
      icon: "/public/images/icon-pro.svg",
      price: {
        monthly: 15,
        yearly: 150
      },
      discount: {
        yearly: '2 months free'
      }
    }
  },
}

const pickAddons = {
  id: 'pickAddons',
  name: 'add-ons',
  title: 'Pick add-ons',
  description: 'Add-ons help enhance your gaming experience.',
  initialState: {
    selectedAddons: ['onlineService', 'largerStorage']
  },
  addons: {
    onlineService: {
      id: 'onlineService',
      name: 'Online service',
      description: 'Access to multiplayer games',
      price: {
        monthly: 1,
        yearly: 10
      }
    },
    largerStorage: {
      id: 'largerStorage',
      name: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      price: {
        monthly: 2,
        yearly: 20
      } 
    },
    customizableProfile: {
      id: 'customizableProfile',
      name: 'Customizable profile',
      description: 'Custom theme on your profile',
      price: {
        monthly: 2,
        yearly: 20
      } 
    }
  }
  
}

const summary = {
  id: 'summary',
  name: 'summary',
  title: 'Finishing up',
  description: 'Double-check everything looks OK before confirming.'
}
const stepComponents = {
  personalInfo: PersonalInfo,
  selectPlan: SelectPlan,
  pickAddons: PickAddons,
  summary: Summary
}
const durations = {
  monthly: {id:'monthly', title: 'Monthly', short:'mo', period:'month'},
  yearly: {id:'yearly', title: 'Yearly', short:'yr', period:'year'}
}

const steps = [personalInfo, selectPlan, pickAddons, summary]

export { steps, stepComponents, durations, selectPlan, pickAddons }