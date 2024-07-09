import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MangaComponent } from './pages/manga/manga.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, },
    { path: 'mangas', component: MangaComponent, },
    { path: 'carro-de-compras', component: ShoppingCartComponent, },
    { path: 'login', component: LogInComponent, },
    { path: 'registro', component: RegisterComponent, },

];
