// Logger that maps over toastr.
// We could implement extra logic on errors

export default ['toastr', (toastr) => ({
  success: (text) => toastr.success(text, 'Success')
})]
