
import Dashboard from '../admin/Dashboard';
import Raffle from '../admin/raffle-page/Raffle';
import ViewRaffle from '../admin/raffle-page/ViewRaffle';
import UpdateRaffle from '../admin/raffle-page/UpdateRaffle';
import DrawRaffle from '../admin/raffle-page/DrawRaffle';
import Prize from '../admin/prize-page/Prize';
import UpdatePrize from '../admin/prize-page/UpdatePrize';
import Participant from '../admin/participants-page/Participant';



const routes = [
    {path: '/admin', exact: true, name: 'Admin'},
    {path: '/admin/dashboard', exact: true, name: 'Dashboard', component: Dashboard},
    {path: '/admin/raffle', exact: true, name: 'Raffle', component: Raffle},
    {path: '/admin/raffle/viewraffle', exact: true, name: 'ViewRaffle', component: ViewRaffle},
    {path: '/admin/raffle/updateraffle', exact: true, name: 'UpdateRaffle', component: UpdateRaffle},
    {path: '/admin/raffle/drawraffle', exact: true, name: 'DrawRaffle', component: DrawRaffle},
    {path: '/admin/prize', exact: true, name: 'Prize', component: Prize},
    {path: '/admin/prize/updatesprize', exact: true, name: 'UpdatePrize', component: UpdatePrize},
    {path: '/admin/participant', exact: true, name: 'Participant', component: Participant},

   
    
];
export default routes;