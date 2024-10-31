import Client from "./Client";
import Notify from "./Notify";

const cliente = new Client("email");
const notificacao = new Notify(cliente);

notificacao.sendEmail()
