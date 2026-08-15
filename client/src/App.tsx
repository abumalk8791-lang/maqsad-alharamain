import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import {
  ContactPage,
  HotelsPage,
  MakkahAndMadinahPage,
  UmrahFromRiyadhPage,
  UmrahPackagesPage,
} from "./pages/StaticPages";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/umrah-from-riyadh"} component={UmrahFromRiyadhPage} />
      <Route path={"/umrah-packages"} component={UmrahPackagesPage} />
      <Route path={"/makkah-and-madinah"} component={MakkahAndMadinahPage} />
      <Route path={"/hotels"} component={HotelsPage} />
      <Route path={"/contact"} component={ContactPage} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
