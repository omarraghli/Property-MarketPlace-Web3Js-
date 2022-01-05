import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContractService } from './Services/contract.service';
import { RouterModule, Routes } from '@angular/router';
import { AddPropertyComponent } from './add-property/add-property.component';
import { FormsModule } from '@angular/forms';
import { DisplayMarketItemsComponent } from './display-market-items/display-market-items.component';
import { HttpClientModule } from '@angular/common/http';
import { AddItemToMarketPlaceComponent } from './add-item-to-market-place/add-item-to-market-place.component';

const appRoutes: Routes = [
  { path: 'AddProprety', component: AddPropertyComponent },
  { path: 'MarketPlace', component: DisplayMarketItemsComponent },
  { path: 'SellingProprety', component: AddItemToMarketPlaceComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AddPropertyComponent,
    DisplayMarketItemsComponent,
    AddItemToMarketPlaceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [ContractService],
  bootstrap: [AppComponent],
})
export class AppModule {}