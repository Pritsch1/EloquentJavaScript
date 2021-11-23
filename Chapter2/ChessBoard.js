function chess(lines, columns)
{
  const space = "⌧", hash = "☐";
  let x = lines, sing = 1, switcher = 1;
  do
  {
    let y = columns, write = "";
    do
    {
      if (switcher === 1)
      {write += space; sing = 1;}
      else if (switcher === 2)
      {write += hash; sing = -1;}
      switcher += sing;
      y--;
    } while (y > 0)
    console.log(write);
    if (switcher === 1)
    {switcher = 2;}
    else
    {switcher = 1};
    x--;
  } while (x > 0)

}
chess(8,8);