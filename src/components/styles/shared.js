// Shared design tokens & reusable style objects

export const token = {
  primary:    "#6366f1",
  primaryHov: "#4f46e5",
  secondary:  "#ec4899",
  accent:     "#14b8a6",
  bg:         "#0f172a",
  bgCard:     "rgba(30,41,59,.8)",
  bgSection:  "rgba(30,41,59,.5)",
  border:     "#334155",
  borderGlow: "rgba(99,102,241,.2)",
  text:       "#f1f5f9",
  textMuted:  "#94a3b8",
  font:       "'Poppins', sans-serif",
};

export const shared = {
  container: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "0 1.5rem",
  },

  section: {
    padding: "5rem 2rem",
    fontFamily: token.font,
  },

  sectionTitle: {
    fontSize: "2.5rem",
    fontWeight: 700,
    textAlign: "center",
    marginBottom: "3rem",
    color: token.text,
    display: "block",
    fontFamily: token.font,
  },

  btn: {
    display: "inline-flex",
    alignItems: "center",
    gap: ".5rem",
    padding: ".875rem 1.75rem",
    background: token.primary,
    color: "white",
    textDecoration: "none",
    borderRadius: ".5rem",
    fontWeight: 600,
    border: "none",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "all .4s ease",
    fontFamily: token.font,
  },

  btnOutline: {
    background: "transparent",
    border: `2px solid ${token.primary}`,
    color: token.primary,
  },

  card: {
    background: token.bgCard,
    borderRadius: 16,
    border: `1px solid ${token.borderGlow}`,
    backdropFilter: "blur(10px)",
  },
};
