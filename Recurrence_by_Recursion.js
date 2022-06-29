function recurrence(base, formula, term) {
  if (term==1) return base;
  return recurrence(formula(base),formula,term-1);
}
