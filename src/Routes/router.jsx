import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../pages/Home";
import Loading from "../components/common/Loading";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                path: "",
                element: <Home />,
                loader: async () => {
                    const [sliderRes, productRes] = await Promise.all([
                        fetch("/sliderData.json"),
                        fetch("/data.json")
                    ]);
                    return {
                        sliderData: await sliderRes.json(),
                        products: await productRes.json()
                    }
                },
                hydrateFallbackElement: <Loading></Loading>
            }
        ]
    }
])
export default router