import React from "react";
import Main from "../../layouts/main";
import {list_class} from "../../dummy-data/class";
import ClassItem from "../../components/class-item/ClassItem";
import Button from "../../components/ui/button";
import InputText from "../../components/ui/input";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

    return (
      <>
        <Main>
          <section>
          <InputText placeholder='Tìm kiếm lớp học'/>
              <ClassItem 
              classname={list_class[0].classname}
              exercises={list_class[0].exercises}
              members={list_class[0].members}
              dateCreate={list_class[0].dateCreate}
              icon={list_class[0].icon}              
              />
              <div className="w-50 m-20" onClick={() => navigate('new-class')}>
              <Button>New class</Button>
              </div>
          </section>
        </Main>
      </>
    );
  };
  
  export default Home;