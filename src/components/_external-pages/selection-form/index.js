import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from '@mui/material'

export default function SelectionForm({
  renderExtraField,
  dynamicField,
  header,
  formData,
  setFormData,
  handleSubmit,
}) {
  const handleChange = event => {
    const { name, value } = event.target
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  return (
    <Paper sx={{ p: 0 }}>
      <Typography variant="h5" mb={4} sx={header && { textAlign: 'center' }}>
        {header || 'Form'}
      </Typography>
      <Box sx={{ maxWidth: '100%' }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth sx={{ maxWidth: '100%' }}>
                <InputLabel>Category</InputLabel>
                <Select
                  name="category"
                  label="Category"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <MenuItem value="category1">Category 1</MenuItem>
                  <MenuItem value="category2">Category 2</MenuItem>
                  <MenuItem value="category3">Category 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth sx={{ maxWidth: '100%' }}>
                <InputLabel>Product</InputLabel>
                <Select
                  name="product"
                  label="Product"
                  value={formData.product}
                  onChange={handleChange}
                >
                  <MenuItem value="product1">Product 1</MenuItem>
                  <MenuItem value="product2">Product 2</MenuItem>
                  <MenuItem value="product3">Product 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth sx={{ maxWidth: '100%' }}>
                <InputLabel>Number</InputLabel>
                <Select
                  name="number"
                  label="Number"
                  value={formData.number}
                  onChange={handleChange}
                >
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                  <MenuItem value="3">3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            {renderExtraField && (
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth sx={{ maxWidth: '100%' }}>
                  <TextField
                    name="note"
                    label="Note"
                    value={formData.note}
                    onChange={handleChange}
                  />
                </FormControl>
              </Grid>
            )}
            <Grid item xs={renderExtraField ? 6 : 12}>
              <FormControl fullWidth sx={{ maxWidth: '100%' }}>
                <InputLabel>{dynamicField}</InputLabel>
                <Select
                  name={renderExtraField ? 'tableNumber' : 'staff'}
                  value={
                    renderExtraField ? formData.tableNumber : formData.staff
                  }
                  onChange={handleChange}
                  label={dynamicField}
                >
                  <MenuItem value={renderExtraField ? 'Table 1' : 'Staff 1'}>
                    {dynamicField} 1
                  </MenuItem>
                  <MenuItem value={renderExtraField ? 'Table 2' : 'Staff 2'}>
                    {dynamicField} 2
                  </MenuItem>
                  <MenuItem value={renderExtraField ? 'Table 3' : 'Staff 3'}>
                    {dynamicField} 3
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth sx={{ maxWidth: '100%' }}>
                <InputLabel>Number of Customers</InputLabel>
                <Select
                  name="numCustomers"
                  label="Number of Customers"
                  value={formData.numCustomers}
                  onChange={handleChange}
                >
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                  <MenuItem value="3">3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ marginTop: 4 }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Paper>
  )
}
