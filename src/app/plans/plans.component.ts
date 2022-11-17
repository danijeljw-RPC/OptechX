import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { loadStripe } from '@stripe/stripe-js';
import { ToastrService } from 'ngx-toastr';


export enum plans {
  STANDARD = 'standard',
  PROFESSIONAL = 'Professional',
  BUSINESS = 'Business',
  ENTERPRISE = 'Enterprise'
}


@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {
  stripPlans = plans;
  priceId:string = '';
  quantity = 1 
  stripePromise = loadStripe(environment.STRIPE_KEY);
  
  constructor( private toastr: ToastrService) { }

  ngOnInit(): void {
  }

async selectedPlan(e:plans){
     console.log(e);
     
     switch(e) {
       case 'standard':
          this.priceId = environment.STRIPE_KEY_STANDARD;
          break;
       case 'Professional':
           this.priceId = environment.STRIPE_KEY_PROFESSIONAL;
           break;
       case 'Business':
           this.priceId = environment.STRIPE_KEY_BUSINESS; 
           break;
       case 'Enterprise':
           this.priceId = environment.STRIPE_KEY_ENTERPRISE;
           break;   
     }
     const stripe = await this.stripePromise;
     const { error } = await stripe.redirectToCheckout({
       mode: "subscription",
       lineItems: [{ price: this.priceId, quantity: this.quantity }],
       successUrl: `${window.location.href}/success`,
       cancelUrl: `${window.location.href}/failure`,
     });
     if (error) {
       console.log(error);
       this.toastr.error(error.message);
      // return error.message
     }
 
  }

// async selectedPlan2(e:plans) {

// const stripe = require('stripe')('sk_test_51HiceVKcwfnufCukKN5vxeiP2Pmq8WOnLA1mUJa0yaDru7JTCh8igYLh9NJOmzk2KI6McyNZK5cqSQLrDEeLBPj700LZndqBLm');

// const subscription = await stripe.subscriptions.create({
//   customer: 'cus_MLEZZXGxyeOzyH',
//   items: [
//     {price: 'price_1LafPsKcwfnufCukWTWTFcmG'},
//   ],
// });
// }

}
