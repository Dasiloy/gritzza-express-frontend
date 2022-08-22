// errors is a partial of values
const disablehandler = (
  values: any,
  errors: any,
  loading = false
) => {
  return (
    loading ||
    Object.keys(values).some(key => errors[key]) ||
    Object.values(values).some(value => !Boolean(value))
  );
};

export default disablehandler;
