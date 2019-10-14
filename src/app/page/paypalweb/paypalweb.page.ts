import { Component, OnInit } from '@angular/core';
import { PayPal } from '@ionic-native/paypal/ngx';

@Component({
  selector: 'app-paypalweb',
  templateUrl: './paypalweb.page.html',
  styleUrls: ['./paypalweb.page.scss'],
})
export class PaypalwebPage implements OnInit {
  paymentAmount: string = '3.33';
  currency: string = 'USD';
  currencyIcon: string = '$';

  constructor( private payPal: PayPal) { 
    
    let _this = this;
    setTimeout(() => {
      // Render the PayPal button into #paypal-button-container
      <any>window['paypal'].Buttons({

        // Set up the transaction
        createOrder: function (data, actions) {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: _this.paymentAmount
              }
            }]
          });
        },

        // Finalize the transaction
        onApprove: function (data, actions) {
          return actions.order.capture()
            .then(function (details) {
              console.log(details);
              // Show a success message to the buyer
              alert('Transaction completed by ' + details.payer.name.given_name + '!');
            })
            .catch(err => {
              console.log(err);
            })
        }
      }).render('#paypal-button-container');
    }, 500)

  }

  

  ngOnInit() {
  }

}
