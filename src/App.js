import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom";

//Layouti
import LayoutiIndex from "./Pages/Layouti/Index/LayoutiIndex"
import Works from "./Pages/Layouti/Works/Works";
import WorksDetails from "./Pages/Layouti/WorksDetails/WorksDetails"

//UI Avatar
import Index from './Pages/UiAvatar/Index/Index'
import UIGenerator from "./Pages/UiAvatar/UIGenerator/UIGenerator";
import ContentGenerator from "./Pages/UiAvatar/ContentGenerator/ContentGenerator";

//365Design
import Index365 from './Pages/365Design/Index/Index365.jsx'
import Home365 from "./Pages/365Design/Home/Home365";
import Category from "./Pages/365Design/Category/Category";
import Links from "./Pages/365Design/Links/Links";
import Details from "./Pages/365Design/Details/Details";
import Products from "./Pages/365Design/Products/Products";
import LearnUi from "./Pages/LearnUi/Index/LearnUi";
import HomeLearnUi from "./Pages/LearnUi/HomeLearnUi/HomeLearnUi";


import axios from "axios";
import { useDispatch } from "react-redux";
import {MainDataActions} from './store/MainData'
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API}/mainData`)
    .then(res => {
      dispatch(MainDataActions.setData(res.data.data))
    })
  }, [dispatch])

  return (
    <BrowserRouter>
      <Routes>

        {/* Layouti Router */}
        <Route path="/" element={<LayoutiIndex />}>
          {/* <Route index element={<LayoutiIndex />}/> */}
          <Route path="works" element={<Works />}/>
          <Route path="works/details" element={<WorksDetails />}/>
          {/* <Route path="*" element={<Navigate to="/works" replace />} /> */}
        </Route>

        {/* uiavatar Router */}
        <Route path="/uiavatar" element={<Index />}>
          <Route index element={<UIGenerator />}/>
          <Route path="contentgenerator" element={<ContentGenerator />}/>
          <Route path="*" element={<Navigate to="/uiavatar" replace />} />
        </Route>

        {/* 365design Router */}
        <Route path="/365design" element={<Index365 />}>
          <Route index element={<Home365 />}/>
          <Route path="category/:id" element={<Category />}/>
          <Route path="details/:id" element={<Details />}/>
          <Route path="links" element={<Links />}/>
          <Route path="products" element={<Products />}/>
          <Route path="*" element={<Navigate to="/365design" replace />} />
        </Route>

        {/* learnui Router */}
        <Route path="/learnui" element={<LearnUi />}>
          <Route index element={<HomeLearnUi />}/>
          <Route path="*" element={<Navigate to="/learnui" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
