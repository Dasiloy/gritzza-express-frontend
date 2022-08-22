const inputOutlinedCreator = (basePallete: any) => ({
  styleOverrides: {
    root: {
      borderRadius: 8,
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor:  basePallete.inputBorderColor,
      },

      "&.Mui-focused": {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: basePallete.primary!.main,
        },
      },
    },
  },
});
export default inputOutlinedCreator;
