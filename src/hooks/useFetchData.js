import { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

export const useFetchData = (props) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const { data: response } = await axios.get(props)
                setData(response)
            } catch (error) {
                console.error(error)
                setData([])
            }
            setLoading(false)
        }
        fetchData()
    }, [])

    return {
        data,
        loading,
    }
}
useFetchData.propTypes = {
    props: PropTypes.string,
}
