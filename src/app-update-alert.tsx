import {useEffect, useState} from 'react'
import {version} from '../package.json'
import {check, Update} from '@tauri-apps/plugin-updater'
import {relaunch} from '@tauri-apps/plugin-process'

export function AppUpdateAlert() {
  const [update, setUpdate] = useState<Update | null>(null)

  useEffect(() => {
    ;(async () => {
      const update = await check()
      if (update) {
        setUpdate(update)
      }
    })()
  }, [])

  if (!update) return null

  const handleUpdateClick = async () => {
    await update.downloadAndInstall()
    await relaunch()
  }

  return (
    <div className="fixed top-0 left-0 right-0 bg-blue-500 text-white p-4">
      <div className="max-w-md mx-auto flex items-center justify-between">
        <p>
          New version available: <strong>v{update.version}</strong> (You're on v
          {version})
        </p>
        <button
          onClick={handleUpdateClick}
          className="cursor-pointer bg-white text-blue-500 px-2 py-1 text-sm rounded-md hover:bg-blue-50 transition-colors"
        >
          Update Now
        </button>
      </div>
    </div>
  )
}
