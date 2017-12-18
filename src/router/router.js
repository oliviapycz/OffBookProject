import Home from '@/components/Home';
import LogIn from '@/components/Connexion/LogIn';
import Register from '@/components/Connexion/Register';
import ListOfBooks from '@/components/ListOfBooks';
import Account from '@/components//Account/Account';
import YourLibrary from '@/components/Account/YourLibrary';
import AddBook from '@/components/Library/AddBook';
import DeleteBook from '@/components/Library/DeleteBook';
import UpdateBook from '@/components/Library/UpdateBook';

// eslint-disable-next-line
export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'LogIn',
    component: LogIn,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/listofbooks',
    name: 'ListOfBooks',
    component: ListOfBooks,
  },
  {
    path: '/account',
    name: 'Account',
    component: Account,
  },
  {
    path: '/account/yourlibrary',
    name: 'YourLibrary',
    component: YourLibrary,
  },
  {
    path: '/account/yourlibrary/addbook',
    name: 'AddBook',
    component: AddBook,
  },
  {
    path: '/account/yourlibrary/updatebook/:id_book',
    name: 'UpdateBook',
    component: UpdateBook,
  },
  {
    path: '/account/yourlibrary/deletebook',
    name: 'DeleteBook',
    component: DeleteBook,
  },
];
