export default function Layout({
    children,
    title
}: {
    title: string
    children: JSX.Element
}){
    return <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      
      <script src="https://unpkg.com/htmx.org@2.0.0" integrity="sha384-wS5l5IKJBvK6sPTKa2WZ1js3d947pvWXbPJ1OmWfEuxLgeHcEbjUUA5i9V5ZkpCw" crossorigin="anonymous"></script>
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="w-full h-full flex">
        {children}
    </body>
  </html>
}