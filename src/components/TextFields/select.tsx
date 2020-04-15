import React, { useState, useRef, useEffect } from 'react';
import ArrowImg from './arrowImg';

interface Props {
    label: string;
    options: string[];
    onChange: (value: string, field: Label, error?: string) => void;
    id: Label;
}

function useOutsideAlerter(ref: React.RefObject<HTMLDivElement>, setOpen: any) {
    useEffect(() => {
        function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

const Select: React.FC<Props> = ({ label, options, onChange, id }) => {
    const [open, setOpen] = useState(false);
    const [selectValue, setValue] = useState('Work opportunities')
    const selectRef = useRef(null);
    useOutsideAlerter(selectRef, setOpen);
    const handleSelect = (value: string) => {
        setValue(value)
        onChange(value, id)
    }
    const selectClasses = open ? 'selectWrapper active' : 'selectWrapper'
    const optionListClasses = open ? 'selectOptionList' : 'closed';
    return (
        <div id={id}>
            <span className='label'>{label}</span>
            <div className={selectClasses} onClick={() => setOpen(!open)} ref={selectRef}>
                <div className='selectedValue'>
                    <span>{selectValue}</span>
                    <ArrowImg />
                </div>
                <div className={optionListClasses}>
                    {options.map(el => (
                        <div className='selectOption' key={el} onClick={() => handleSelect(el)}>
                            <span>{el}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Select;