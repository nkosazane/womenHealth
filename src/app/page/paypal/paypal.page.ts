import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';


@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.page.html',
  styleUrls: ['./paypal.page.scss'],
})
export class PaypalPage implements OnInit {

  
  constructor( private paypal:PayPal) { }

  paymentAmount: string = '0.00';
  currency: string = 'ZAR';
  currencyIcon: string = 'R';

  payWithPaypal() {
    console.log("Pay ????");
    this.paypal.init({
      PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
      PayPalEnvironmentSandbox: 'AQEWlh6KVAMqVwWMwbeDro__MU88dUKdisVCn1DMcp-igKMNWsWW2qvpVEW8KSNq9Zq7Dq_6AqobO6xR'
    }).then(() => {
      // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
      this.paypal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
        // Only needed if you get an "Internal Service Error" after PayPal login!
        //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
      })).then(() => {
        let payment = new PayPalPayment(this.paymentAmount, this.currency, 'Description', 'sale');
        this.paypal.renderSinglePaymentUI(payment).then((res) => {
          console.log(res);
         
        }, () => {
          // Error or render dialog closed without being successful
        });
      }, () => {
        // Error in configuration
      });
    }, () => {
      // Error in initialization, maybe PayPal isn't supported or something else
    });
  }

  ngOnInit() {
  }
}
