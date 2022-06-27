import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { 
      title: 'Profile Management',
      url: '/dashboard/',
      icon: 'albums'
    },
    { title: 'Accounts', 
      url: '/home-results/', 
      icon: 'person' 
    },
    { title: 'Reports', 
      url: '/reports/', 
      icon: 'briefcase' 
    },
    { title: 'Transact', 
      url: '/wallet/', 
      icon: 'archive' 
    },
    { title: 'Instructions', 
      url: '/instructions', 
      icon: 'information' 
    },
    { title: 'Help', 
      url: '/helping', 
      icon: 'help' 
    },
    { title: 'Logout', 
    url: '/logout', 
    icon: 'power' 
  },    
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}



import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
    {
      path: 'login',
      loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
    },
    {
      path: 'logout',
      loadChildren: () => import('./logout/logout.module').then( m => m.LogoutPageModule)
    },
    {
      path: 'register',
      loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
    },
    {
      path: 'dashboard',
      loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
    },
    {
      path: 'accounts',
      loadChildren: () => import('./pages/home-results/home-results.module').then( m => m.HomeResultsPageModule)
    },
    {
      path: 'wallet',
      loadChildren: () => import('./wallet/wallet.module').then( m => m.WalletPageModule)
      },  
    {
      path: 'reports',
      loadChildren: () => import('./reports/reports.module').then( m => m.ReportsPageModule)
    },
    {
      path: 'instructions',
      loadChildren: () => import('./instructions/instructions.module').then( m => m.InstructionsPageModule)
    },
    {
      path: 'help',
      loadChildren: () => import('./helping/helping.module').then( m => m.HelpingPageModule)
    },
  
    {
      path: 'tabnav',
      loadChildren: () => import('./tabnav/tabnav.module').then( m => m.TabnavPageModule)
    },  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }