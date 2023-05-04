//import React, {useCallback, useEffect, useMemo, useState} from 'react';
//import Checkbox from '@/components/CheckBox/Checkbox';
//import Button from '@/components/Button/Button';
//
//interface Interface {
//  data: Array<any>,
//  headerCells: Array<any>,
//  allCheckedTip: {
//    all?: string,
//    none?: string
//  },
//  onCheckDataChange: (data: Array<any>) => void
//  onCheckedDataChange: (data: Array<any>) => void
//}
//
//function CheckboxGroup({
//                         data,
//                         headerCells,
//                         allCheckedTip,
//                         onCheckedDataChange
//                       }: Interface) {
//
//  const [checkedData, setCheckedData] = useState([]);
//  // 原始数据
//  const [originData, setOriginData] = useState(data);
//  const dataProps = Object.keys(originData[0]);
//
//  const allCheckedText = useMemo(() => {
//    if (checkedData.length >= 0 && checkedData.length < originData.length) {
//      return allCheckedTip.all || 'Check all';
//    } else {
//      return allCheckedTip.none || 'Cancel all';
//    }
//  }, [checkedData]);
//
//  useEffect(() => {
//    onCheckedDataChange(checkedData);
//  }, [checkedData]);
//
//  const setAllCheck = useCallback((e) => {
//    const _checked = e.target.checked;
//    setCheckedData(_checked ? originData : []);
//  }, []);
//
//  const setSingleCheck = useCallback((e, item) => {
//    const _checked = e.target.checked;
//    setCheckedData(checkedData => (
//      _checked ? [...checkedData, item]
//        : checkedData.filter(data => data.id !== item.id)
//    ));
//  }, []);
//
//  const removeItem = useCallback((id) => {
//    setOriginData(originData => originData.filter(item => item.id !== id));
//    setCheckedData(checkedData => checkedData.filter(item => item.id !== id));
//  }, []);
//
//  return (
//    <div>
//      <table border={1} width="500" align="center">
//        <thead>
//        <tr>
//          <td colSpan={5}>
//            <Checkbox
//              checked={checkedData.length === originData.length}
//              onChange={(e) => setAllCheck(e)}
//            >
//              {allCheckedText}
//            </Checkbox>
//          </td>
//        </tr>
//
//        {
//          headerCells &&
//          <tr>
//            {
//              headerCells.map(item => (
//                <th key={item}>{item}</th>
//              ))
//            }
//          </tr>
//        }
//        </thead>
//        <tbody>
//        {
//          originData && originData.map(item => (
//            <tr key={item.id}>
//              <td>
//                <Checkbox
//                  checked={checkedData.some(data => data.id === item.id)}
//                  onChange={(e) => setSingleCheck(e, item)}
//                >测试</Checkbox>
//              </td>
//
//              {
//                dataProps.map(prop => (
//                  <td key={prop}>{item[prop]}</td>
//                ))
//              }
//
//              <td>
//                <Button
//                  type="warn"
//                  onClick={() => removeItem(item.id)}
//                >删除</Button>
//              </td>
//            </tr>
//          ))
//        }
//        </tbody>
//      </table>
//    </div>
//  );
//}
//
//export default CheckboxGroup;
