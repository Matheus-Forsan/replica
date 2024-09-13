import React from "react";

function App() {
  return (
    <div>
      <header className="flex  bg-white h-20 border-gray-300 border-2  items-center justify-between">
        <div className="flex">
        <div ><h1 className="text-2xl p-6">=</h1></div>
        <div className="flex items-center">
         <h1 className="text-2xl">Google sala de aula ></h1>
        </div>
        <div className="flex flex-col justify-center ml-3">
          <h2 >2023-DEV-JA</h2>
          <h3>CT - Desenvolvimento de Sistemas</h3>
        </div>
        </div>
        <div className="flex bg-purple-600 text-white h-11 w-11 rounded-full items-center justify-center mr-5">
          M
        </div>
      </header>
      <main>
        <div className=" flex justify-around ml-10 mt-10 p-10">
          <div className=" flex flex-col ">
            <div className="flex-col w-4/5">
              <div className=" flex w-5/5 mb-2">
                <h1 className="text-4xl">
                 RÉPLICA DE UMA PÁGINA DE UM SITE USANDO TAILWIND CSS
                </h1>
              <div>
                <h1 className="text-4xl ml-3">:</h1></div>
              </div>
          
          <h3 className="mb-2">Matheus Nobrega</h3>
          <div className="flex justify-between">
          <p className="font-bold mb-2">100 pontos</p>
          <h3 className="font-bold">Data de entrega: Hoje</h3>
          </div>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 w-5/5"></hr>
        </div>
        <div className="w-4/5">
          <div>
            <p className="text-xl mb-3"><b>Objetivo</b>: Reproduzir a interface visual de <b>uma página específica</b>  de um site(tente chegar o mais proximo que conseguir), utilizando o framework Tailwind CSS.</p>

            <p className="text-xl mb-3"><b>Descrição da Atividade:</b> Nesta atividade, você deverá escolher <b>uma única página de um site</b> para ser recriada, podendo optar por usar uma estrutura padrão com <b>HTML</b> e <b>CSS</b> ou desenvolver a réplica utilizando <b>React</b>.
              A escolha da página a ser replicada será feita por você, que deve focar na recriação fiel da página escolhida.</p>
            <ul className="mb-3">
            <p className="text-xl mb-3"><b>Ferramentas utilizadas:</b></p> 
              <li><b>HTML/CSS</b> ou <b>React</b></li>
              <li><b>Tailwind CSS</b></li>
            </ul>
            <p className="text-xl"><b>caso queira usar o react rodar os comandos na pasta:</b></p>
            <p className="text-xl"><b>yarn</b></p>
            <p className="text-xl"><b>yarn start</b></p>
            </div> 
            <div className="mt-10 flex flex-wrap w-5/5 gap-2">
              <div className="flex items-center border rounded-xl overflow-hidden w-96">
                <div className="flex justify-center border w-32 h-20">
                  <img className="w-20" src="https://cdn.iconscout.com/icon/free/png-256/free-google-drive-logo-icon-download-in-svg-png-gif-file-formats--workspace-logos-icons-2416659.png?f=webp"/>
                </div>
                <div className="flex-col ml-7">
                <h2 className="font-semibold">tailwind  - HTML.rar</h2>
                <p>Arquivo desconhecido</p>
                </div>
                
              </div>
              <div className="flex items-center border rounded-xl overflow-hidden w-96">
                <div className="flex justify-center border w-32 h-20">
                  <img className="w-20" src="https://cdn.iconscout.com/icon/free/png-256/free-google-drive-logo-icon-download-in-svg-png-gif-file-formats--workspace-logos-icons-2416659.png?f=webp"/>
                </div>
                <div className="flex-col ml-7">
                <h2 className="font-semibold">tailwind  - React.rar</h2>
                <p>Arquivo desconhecido</p>
                </div>
                
              </div>
              <div className="flex items-center border rounded-xl overflow-hidden w-96">
                <div className="flex justify-center border w-32 h-20">
                  <img className="w-32" src="https://www.shutterstock.com/image-photo/texture-blurry-text-open-textbook-260nw-1175839786.jpg"/>
                </div>
                <div className="flex-col ml-7">
                <h2 className="font-semibold">PRINCIPAIS ESTILOS DE ....</h2>
                <p>Word</p>
                </div>
                
              </div>
              
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 w-5/5 mt-8"></hr>
            <div className="flex justify-start  ">
              <h2 className="font-semibold">* Comentários da turma</h2>
            </div>
            <div className=" flex justify-start text-blue-500 font-semibold h-10 items-center  w-5/6">
              <h2>Adicionar comentário para a turma</h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-9 w-full -mr-16">
          <div className="flex-col justify-center w-5/6 h-52 border-2  p-2 pl-4 pr-4 rounded-xl shadow-lg">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl">Seus Trabalhos</h1>
             <h2 className="text-green-700 font-semibold">Atribuído</h2>
            </div>
            <div className="ml-8 flex justify-center mt-5 border text-blue-500 font-semibold h-10 items-center rounded w-5/6">
              <h2>+ Adicionar ou criar</h2>
            </div>
            <div className="ml-8 flex justify-center mt-5 border text-white font-semibold h-10 items-center rounded w-5/6 bg-blue-500">
              <h2>Marcar como concluida </h2>
            </div>
          </div>
          <div className="flex-col justify-center w-5/6 h-28 border-2  p-2 pl-4 pr-4 rounded-xl shadow-lg ">
            <div className="flex justify-center items-center">
              <h2 className="font-semibold">* Comentários particulares</h2>
            </div>
            <div className="ml-8 flex justify-center mt-5 text-center text-blue-500 font-semibold h-10 items-center  w-5/6">
              <h2>Adicionar comentário para Matheus Nobregar</h2>
            </div>
        
          </div>
        </div>
        </div>
      </main>
    </div>  
  );
}

export default App;
