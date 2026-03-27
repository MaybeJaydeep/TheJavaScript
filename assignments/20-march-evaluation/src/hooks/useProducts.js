import { useEffect, useState } from "react"

export const useProducts = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  const [search, setSearch] = useState("")
  const [debouncedSearch, setDebouncedSearch] = useState("")

  const [sortBy, setSortBy] = useState("")
  const [order, setOrder] = useState("")

  const [category, setCategory] = useState("")
  const [categories, setCategories] = useState([])

  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)

  const limit = 10;

    const buildURL = () => {

    const skip = (page - 1) * limit

    let url = ""

    if (category) {
      url = `https://dummyjson.com/products/category/${category}`
    }
    else if (debouncedSearch) {
      url = `https://dummyjson.com/products/search?q=${debouncedSearch}`
    }
    else {
      url = `https://dummyjson.com/products`
    }

    if (url.includes("?")) {
      url += `&limit=${limit}&skip=${skip}`
    } else {
      url += `?limit=${limit}&skip=${skip}`
    }

    if (sortBy) {
      url += `&sortBy=${sortBy}&order=${order}`
    }

    return url
  }

    useEffect(() => {

    const fetchProducts = async () => {

      setLoading(true)

      const res = await fetch(buildURL())
      const data = await res.json()

      setProducts(data.products || [])
      setTotal(data.total || 0)

      setLoading(false)
    }

    fetchProducts()

  }, [page, debouncedSearch, sortBy, order, category])

    useEffect(() => {

    const timer = setTimeout(() => {
      setDebouncedSearch(search)
    }, 500)

    return () => clearTimeout(timer)

  }, [search])

    useEffect(() => {

    const fetchCategories = async () => {
      const res = await fetch("https://dummyjson.com/products/category-list")
      const data = await res.json()
      setCategories(data)
    }

    fetchCategories()

  }, [])

    return {

    products,
    loading,

    search,
    setSearch,

    sortBy,
    setSortBy,
    order,
    setOrder,

    category,
    setCategory,
    categories,

    page,
    setPage,
    total,
    limit

  }
}