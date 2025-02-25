import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Image } from '../model/image.model';

@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './produits.component.html',
})
export class ProduitsComponent implements OnInit {
  produits?: Produit[]; //un tableau de produits

  apiurl: string = 'http://localhost:8080/produits/api';

  constructor(
    private produitService: ProduitService,
    public authService: AuthService
  ) {
    //this.produits=[];
  }

  ngOnInit(): void {
    this.chargerProduits();
  }

  /* chargerProduits(){
  this.produitService.listeProduit().subscribe(prods => {
  //  console.log(prods);
    this.produits = prods;

    this.produits.forEach((prod) => {
      prod.imageStr = 'data:' + prod.images[0].type + ';base64,' +  prod.images[0].image;
      }); 

    });
}*/

  /* chargerProduits(){
this.produitService.listeProduit().subscribe(prods => {
this.produits = prods;
});
} */

  /* chargerProduits() {
    this.produitService.listeProduit().subscribe((prods) => {
      this.produits = prods;
      this.produits.forEach((prod) => {
        if (prod.image)
           this.produitService
                  .loadImage(prod.image?.idImage)
                  .subscribe((img: Image) => {
                  prod.imageStr = 'data:' + img.type + ';base64,' + img.image;
                  });

      });
    });
  }
 */

/*   chargerProduits() {
    this.produitService.listeProduit().subscribe((prods) => {
      this.produits = prods;
      this.produits.forEach((prod) => {
        prod.imageStr =
          'data:' + prod.images[0].type + ';base64,' + prod.images[0].image;
      });
    });
  } */


    chargerProduits(){
      this.produitService.listeProduit().subscribe(prods => {
      this.produits = prods;
      });
      }
      
  supprimerProduit(p: Produit) {
    let conf = confirm('Etes-vous sûr ?');
    if (conf)
      this.produitService.supprimerProduit(p.idProduit).subscribe(() => {
        console.log('produit supprimé');
        this.chargerProduits();
      });
  }
}
