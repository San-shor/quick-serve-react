import colors from "../ui/color/color";
const getShiftColor = (shift) => {
  switch (shift?.toLowerCase()) {
    case "morning":
      return {
        background: colors.accent[50],
        text: colors.accent[600],
        border: colors.accent[200],
      };
    case "evening":
      return {
        background: colors.warning[50],
        text: colors.warning[500],
        border: colors.warning[200],
      };
    case "night":
      return {
        background: colors.primary[50],
        text: colors.primary[700],
        border: colors.primary[200],
      };
    default:
      return {
        background: colors.neutral[100],
        text: colors.neutral[600],
        border: colors.neutral[300],
      };
  }
};

export default getShiftColor;
