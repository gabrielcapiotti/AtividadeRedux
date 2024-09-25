import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegistrarTransacao from "../pages/RegistrarTransacao";
import { ListarTransacoes } from "../pages/ListarTransacoes";

const router = createBrowserRouter([

    {
        path: "/",
        element: <RegistrarTransacao />,
    },
    {
        path: "/listagemtransacao",
        element: <ListarTransacoes />,
    },

]);

export function AppRoutes() {
    return <RouterProvider router={router} />;
}


