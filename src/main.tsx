import React from "react"
import ReactDOM from "react-dom/client"
import { HashRouter as Router } from "react-router-dom"
import { MantineProvider } from "@mantine/core"
import { Notifications } from "@mantine/notifications"
import "@mantine/core/styles.layer.css"
import "@mantine/carousel/styles.css"
import "@mantine/notifications/styles.css"

import { App } from "./App"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <MantineProvider>
        <Notifications />
        <App />
      </MantineProvider>
    </Router>
  </React.StrictMode>
)
