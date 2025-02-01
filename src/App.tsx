import {version} from '../package.json'
import {AppUpdateAlert} from './app-update-alert'

export function App() {
  return (
    <>
      <AppUpdateAlert />
      <main className="min-h-screen bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold text-zinc-800 dark:text-white">
            Tauri Template v{version}
          </h1>
        </div>
      </main>
    </>
  )
}
