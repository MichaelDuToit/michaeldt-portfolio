
export function OrderProjects(a, b)
{
  function getComparer(a, b)
  {
    if(a < b)
    {
      return -1;
    }
    
    if(a > b)
    {
      return 1;
    }    

    return 0;
  }

  // first we order by the SortOrder meta data.
  let index = getComparer(a.sortOrder, b.sortOrder);

  // if we didn't have a duplication then return
  if(index != 0)
  { 
    return index;
  }

  // otherwise they have the same SortOrder, so sort alphabetically by the title instead.
  return getComparer(a.title.toUpperCase(), b.title.toUpperCase())

}