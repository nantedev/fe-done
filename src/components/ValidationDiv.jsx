const ValidationDiv = ({ meta }) => {
  if (meta.touched) {
    if (meta.error) return <div className="invalid-feedback">{meta.error}</div>;
    else return <div className="valid-feedback">Cela me semble bon.</div>;
  } else return null;
};

export default ValidationDiv;