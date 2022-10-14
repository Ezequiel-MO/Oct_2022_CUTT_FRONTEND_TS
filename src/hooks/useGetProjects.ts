import { useEffect, useState } from 'react'
import baseAPI from '../axios/axiosConfig'
import { IProject } from '../interfaces/project.interface'

const useGetProjects = () => {
  const [projects, setProjects] = useState<IProject[]>([])
  useEffect(() => {
    const fetchProjects = async (): Promise<IProject[]> => {
      const response = await baseAPI.get(`v1/projects`)
      setProjects(response.data.data.data)
      return
    }
    fetchProjects()
  }, [])
  return {
    projects
  }
}

export default useGetProjects
