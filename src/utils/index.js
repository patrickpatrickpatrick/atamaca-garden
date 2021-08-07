const linksToRows = (links, slidesPerRow) => links.reduce((rows, link) => {
  if (rows[rows.length - 1].length < slidesPerRow) {
    rows[rows.length - 1].push(link);
  } else {
    rows.push([ link ]);
  }
  return rows;
}, [[]]);

const activeFiltersSelected = (activeFilters) => ['curators', 'tags'].filter((f) => activeFilters[f].length > 0)

const filterReferences = (references, activeFilters) => references.filter((ref) => {
  const filters = new Set(activeFiltersSelected(activeFilters));
  const checks = [];
  // const yearsSet = new Set(ref.years);

  if (filters.has('curators')) {
    if (activeFilters.curators.find(x => x === ref.curator)) {
      checks.push(true);
    } else {
      checks.push(false);
    }
  }
  // if (filters.has('years')) {
  //   if (activeFilters.years.find(x => yearsSet.has(x))) {
  //     checks.push(true);
  //   } else {
  //     checks.push(false);
  //   }
  // }
  if (filters.has('tags')) {
    if (activeFilters.tags.find(x => x === ref.tag)) {
      checks.push(true);
    } else {
      checks.push(false);
    }
  }

  return checks.reduce((x, y) => x && y, true);
});

export { linksToRows, filterReferences };
