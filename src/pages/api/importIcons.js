let importAll = (requireContext) => requireContext.keys().forEach(requireContext)

try {
  importAll(require.context('../../Svg/', true, /\.svg$/))
  console.log(1)
} catch (error) {
  console.log(error)
}
