import { apiInitializer } from "discourse/lib/api";
import CategoryBanner from "../components/category-banner";

export default apiInitializer("1.13.0", (api) => {
api.renderInOutlet("above-site-header", CategoryBanner);
});
